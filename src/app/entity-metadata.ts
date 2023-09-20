import { EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig } from '@ngrx/data';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com',
  timeout: 3000
};

const entityMetadata: EntityMetadataMap = {
  Users: {
    entityName:'User'
  },
  Posts: {
    entityName: 'Post'
  }
};

const pluralNames = {  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
