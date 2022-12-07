import {IdentitySet, OnenoteEntitySchemaObjectModel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteEntityHierarchyModel extends OnenoteEntitySchemaObjectModel, Partial<Parsable> {
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** The displayName property */
    displayName?: string;
    /** The lastModifiedBy property */
    lastModifiedBy?: IdentitySet;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
}
