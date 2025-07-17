import { TranformBase } from './Components/TranformBase.js';
import { Entity } from './Entity.js';

/**
 * @summary Static ECS manager responsible for entity creation, storage, and management.
 * 
 * ECSFManager provides a centralized system to create and manage all active entities.
 */
class ECSFManager {
  /** @type {number} Auto-incrementing ID for unique entity identification. */
  static Global_ID = 0;

  /** @type {Object<number, ReturnType<typeof Entity>>} Stores all entities by their ID. */
  static Entity_Data = {};

  /**
   * Creates a new entity with a unique ID and optional name.
   * @param {string} [name] - Optional name for the entity. Defaults to "Entity{ID}".
   * @returns {object} The newly created entity instance.
   */
  static CreateEntity(name = "Entity" + ECSFManager.Global_ID) {
    const entity = Entity(ECSFManager.Global_ID++, name);
    ECSFManager.Entity_Data[entity.id] = entity;
    return entity;
  }

  /**
   * Destroys (removes) an entity by its ID.
   * @param {number} id - The ID of the entity to remove.
   */
  static DestroyEntity(id) {
    delete ECSFManager.Entity_Data[id];
  }

  /**
   * Returns an array of all currently active (defined) entities.
   * @returns {object[]} All active entity instances.
   */
  static All() {
    return Object.values(ECSFManager.Entity_Data).filter(e => e !== undefined);
  }
}