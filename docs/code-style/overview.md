# Code Style Guide

## Naming Conventions

- **Class:** `MyClassName`
- **Stuct:** `MyStructName`
- **Struct and Class Members:**
    - Public: `m_my_name`
    - Protected or Private: `_m_my_name` 
- **Globals:**
    - Public: `g_my_name`
    - Protected or Private: `_g_my_name`
- **Functions and Methods:**
    - Public: `myFunctionName()`
    - Protected or Private: `_myFunctionName()`
- **Variables:**
    - `x`, `data_ptr`, `end_of_line_index`
- **Getters:**
    - `color()`
    - With `bool` result:
        - `ìsActive()`
        - `hasAttribute()`
        - `canRead()`
        - `mustUpdate()`
- **Setters:**
    - `getColor()`



| Use Case                                       | Style                  | Example               |
|------------------------------------------------|------------------------|-----------------------|
| Class and Struct Names                         | PascalCase             | `MyClassName`.        |
| Public Methods                                 | camelCase              | `myPublicMethod()`    |
| Private and Protected Methods                  | camelCase              | `_myPublicMethod()`   |
| Public Class and Struct Members                | snake_case with prefix | `m_member_name`       |
| Private and Protected Class and Struct Members | snake_case with prefix | `_m_member_name`      |
| Variables                                      | snake_case             | `local_variable_name` |


---

## Pointers

Classes that provide methods to access internal data using pointers follow this convention:

- Methods without the `mut` prefix return **immutable (read-only) pointers**.
- Methods with the `mut` prefix return **mutable (read-write) pointers**.

This naming pattern helps make the intent clear and encourages safe memory access where possible.


---

## Example

``` cpp
class MyClassName : public Object {
public:
    float computedValue(int32_t a, int32_t b) {
        try {
            float sum = static_cast<float>(a + b) * m_coef;
            return std::clamp<float>(sum);
        }
        catch (const Exception& e) {
        }
        return std::numeric_limits<float>::quiet_NaN();
    }
    
public:
    float m_coef;
protected:
    int32_t _m_internal_status;
};

struct ConfigPair {
    String m_key;
    union {
        int32_t i32;
        float f32;
    } m_value;
};
```


