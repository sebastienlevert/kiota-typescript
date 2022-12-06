import {GroupType} from './groupType';
import {ModifiedProperty} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TargetResource extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates the visible name defined for the resource. Typically specified when the resource is created. */
    displayName?: string;
    /** When type is set to Group, this indicates the group type. Possible values are: unifiedGroups, azureAD, and unknownFutureValue */
    groupType?: GroupType;
    /** Indicates the unique ID of the resource. */
    id?: string;
    /** Indicates name, old value and new value of each attribute that changed. Property values depend on the operation type. */
    modifiedProperties?: ModifiedProperty[];
    /** The OdataType property */
    odataType?: string;
    /** Describes the resource type.  Example values include Application, Group, ServicePrincipal, and User. */
    type?: string;
    /** When type is set to User, this includes the user name that initiated the action; null for other types. */
    userPrincipalName?: string;
}
