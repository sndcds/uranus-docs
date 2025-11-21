# Event Editor Inline Editable Section

A self-contained inline-editable section that handles:

- Displaying data
- Switching between read mode ↔ edit mode
- Inline validation
- Local form state & syncing with parent via v-model
- Calling an API to save changes

The below example uses `Basics` for the data

---

## Overview of Uranus Inline Edit Component Structure and Responsibilities

| Layer | Purpose |
|-------|---------|
| `UranusInlineEditSection` | Provides “editable section” layout and styling |
| `UranusInlineEditLabel` | Shows label and edit button |
| `isEditing` | Controls edit/read switching |
| `local` reactive object | Source of truth while editing |
| `watch()` modelValue → local | Parent changes update local |
| `watch() `local → parent` | Two-way binding updates parent |
| Computed `nameError` | Local inline validation for each data item which need error indication |
| `save()` | Sends data to server and emits update |
| `UranusInlineActionBar` | Save and Cancel UX controls |


---

## 1. Template: UI Structure & Render Logic

### Top-Level Layout
```html
<UranusInlineEditSection :active="isEditing">
```

- Provides the “editing frame” (borders, background, etc.)
- Receives the active flag → determines whether edit mode styling is active


### Inline Edit Label
```html
<UranusInlineEditLabel
  :label-text="t('label')"
  :edit-button-text="t('edit')"
  @edit-started="startEditing" />
```

**Responsibilities:**

- Shows a label for the inline section
- Shows an “Edit” button
- Emits edit-started to trigger edit mode


### Edit Mode Content

`<UranusInlineSectionLayout>` only renders when editing:

```html
<UranusInlineSectionLayout v-if="isEditing">
  <UranusTextInput ... />
  <UranusTextInput ... />
  <UranusInlineActionBar>...</UranusInlineActionBar>
</UranusInlineSectionLayout>
```

**Responsibilities:**

- Provides a layout container for editable fields
- Action bar with Save / Cancel buttons


### Read Mode Content

```html
<div v-else>
  <h1>{{ ... }}</h1>
  <h3>{{ ... }}</h3>
</div>
```

**Responsibilities:**

- Displays the values without editing controls
- Fully decoupled from edit mode


---

## 2. Script: Logic & State Management

### Props

```js
const props = defineProps<{
  modelValue?: Basics | null
  propAError?: string | null
}>()
```

**Responsibilities:**

- `modelValue`: receives event basics data from parent
- `nameError `: optional external validation error (server or parent UI)


### Emit

```js
const emit = defineEmits<{
  (e: 'update:modelValue', v: Basics | null): void
  (e: 'updated'): void
}>()
```

**Responsibilities:**

- `update:modelValue` → two-way binding
- `updated` → tells parent to reload data or show success indicator


### Local Editable Copy

```js
const local = reactive<Basics>({
  id: props.modelValue?.id,
  prop_a: props.modelValue?.prop_a ?? '',
  prop_b: props.modelValue?.prop_b ?? null,
})
```

**Responsibilities:**

- Keeps all editing state local
- Independent from props.modelValue so cancel is possible
- Ensures form is always non-null, safe to edit


### Sync: Parent → Local

```js
watch(() => props.modelValue, (nv) => {
  if (nv) Object.assign(local, nv)
})
```

**Responsibilities:**

- Updates local state when parent modifies model
- Keeps the component reactive to external changes


### Sync: Local → Parent

```js
watch(local, (nv) => emit('update:modelValue', { ...nv }), { deep: true })
```

**Responsibilities:**

- Emits partial updates to parent
- Keeps external state updated in real-time


---

## 3. Editing State

```js
const isEditing = ref(false)
const isSaving = ref(false)
```

**Responsibilities:**

- isEditing toggles between edit + read view
- isSaving shows busy state to UX components


### Start Editing

```js
const startEditing = () => {
  isEditing.value = true
}
```

### Cancel Editing

```js
const cancelEditing = () => {
  isEditing.value = false
}
```

Both are consumed by `<UranusInlineEditLabel>` and the action bar.


---

## 4. Save Logic

```js
async function save() {
  if (!props.modelValue?.id) return console.error('No event ID available')

  isSaving.value = true
  try {
    await apiFetch(`/api/admin/event/${props.modelValue.id}/header`, {
      method: 'PUT',
      body: JSON.stringify({
        prop_a: local.prop_a.trim(),
        prop_b: (local.prop_b ?? '').trim() || null,
      }),
    })
    isEditing.value = false
    emit('updated')
  } catch (err) {
    console.error('Failed to update header', err)
  } finally {
    isSaving.value = false
  }
}
```

**Responsibilities:**

- Validates existence of event ID
- Sends a PUT request with the properties
- Updates external state via emit('updated')
- Closes edit mode
- Prevents double submits via isSaving


---

## 5. Validation Logic

```js
const propAError = computed(() => {
  if (props.titleError) return props.propAError

  if (!local.prop_a || local.prop_a.trim() === "")
    return t('empty_input_field_message')

  return ""
})
```

**Responsibilities:**

- Combines internal + external validation
- Ensures empty titles cannot be saved
- Supplies error text to `<UranusTextInput>`


---

## 6. Styling

```css
.basics label { display:block; margin-bottom: .5rem; }
.actions { margin-top: .5rem; }
```

**Responsibilities:**

-	Minor layout adjustments for readability

