import {IdentitySet, NotebookLinks} from './index';
import {OnenoteUserRole} from './onenoteUserRole';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CopyNotebookModel extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The createdBy property */
    createdBy?: string;
    /** The createdByIdentity property */
    createdByIdentity?: IdentitySet;
    /** The createdTime property */
    createdTime?: Date;
    /** The id property */
    id?: string;
    /** The isDefault property */
    isDefault?: boolean;
    /** The isShared property */
    isShared?: boolean;
    /** The lastModifiedBy property */
    lastModifiedBy?: string;
    /** The lastModifiedByIdentity property */
    lastModifiedByIdentity?: IdentitySet;
    /** The lastModifiedTime property */
    lastModifiedTime?: Date;
    /** The links property */
    links?: NotebookLinks;
    /** The name property */
    name?: string;
    /** The OdataType property */
    odataType?: string;
    /** The sectionGroupsUrl property */
    sectionGroupsUrl?: string;
    /** The sectionsUrl property */
    sectionsUrl?: string;
    /** The self property */
    self?: string;
    /** The userRole property */
    userRole?: OnenoteUserRole;
}
