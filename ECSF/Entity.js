/**
 * @summary Creates a new ECSF entity with basic component and flag support.
 * 
 * This function returns an object representing an entity in the ECS system.
 * Each entity supports dynamic components and flags (hook-like behavior).
 *
 * @param {number} id - Unique identifier for the entity.
 * @returns {object} An ECS entity instance.
 */
export const Entity = (id, name) => {
  return {
    /** @type {number} Unique entity ID. */
    id: id,

    /** @type {string} Optional entity name (should be assigned externally). */
    name: name,

    /**
     * @type {Object<string, any>}
     * Stores all components attached to this entity.
     */
    components: {
      Transform: TranformBase,
    },

    /**
     * @type {Object<string, Function>}
     * Stores flag callbacks (e.g., lifecycle hooks).
     */
    flagId: {
      /** Called every frame if defined. */
      Update: () => {},
    },

    /**
     * Assigns a flag (hook) to this entity.
     * @param {string} name - Name of the flag (e.g., "Update").
     * @param {Function} fn - Function to be called when the flag is triggered.
     */
    setFlag(name, fn) {
      this.flagId[name] = fn;
    },

    /**
     * Retrieves a flag function.
     * @param {string} name - Flag name.
     * @returns {Function} The function bound to the flag.
     */
    getFlag(name) {
      return this.flagId[name];
    },

    /**
     * Adds a new component to the entity.
     * @param {string} name - Component name.
     * @param {any} data - Component data (optional).
     */
    addComponent(name, data = {}) {
      this.components[name] = data;
    },

    /**
     * Retrieves a component by name.
     * @param {string} name - Component name.
     * @returns {any} The component data.
     */
    getComponent(name) {
      return this.components[name];
    },

    /**
     * Checks if the entity has a component.
     * @param {string} name - Component name.
     * @returns {boolean} True if present.
     */
    hasComponent(name) {
      return name in this.components;
    },

    /**
     * Removes a component from the entity.
     * @param {string} name - Component name.
     */
    removeComponent(name) {
      delete this.components[name];
    }
  };
};