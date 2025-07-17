
# ECSF (Entity Component System Framework)

**ECSF** is a lightweight and dynamic **Entity Component System** built entirely on native JavaScript objects — no custom classes or inheritance required. It is optimized for game modding environments like **TL Pro**, where flexibility, low overhead, and native compatibility are key.

## ✨ Key Features

- **100% Native JavaScript Objects:** No classes, constructors, or inheritance. Pure object manipulation for performance and simplicity.
- **Component-Driven Architecture:** Entities are composed of modular components that hold all relevant data — such as `Transform`, `Texture`, or `Color`.
- **Flag-Based Hooks:** Flags act as lifecycle callbacks (*similar to TL Pro hooks*) and can be triggered at specific moments like `onInit`, `Update`, `OnDeath`, or `OnSpawn`.
- **No Boilerplate:** Add or remove logic on-the-fly with simple object updates and native iteration.
- **Engine-Agnostic:** Designed to work smoothly inside modding platforms, but adaptable to any JavaScript game loop or rendering system.

## 🧠 Concept

Each entity is a plain object with:
- A unique ID
- A `components` dictionary
- A `flagId` dictionary for lifecycle logic

Instead of using classes or prototypes, ECSF uses simple JavaScript object operations to define and update behavior dynamically — ideal for environments where native behavior is preferred or required.
