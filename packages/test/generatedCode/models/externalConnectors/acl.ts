import {AccessType} from './accessType';
import {AclType} from './aclType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Acl extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The accessType property */
    accessType?: AccessType;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** The type property */
    type?: AclType;
    /** The unique identifer of the identity. In case of Azure Active Directory identities, value is set to the object identifier of the user, group or tenant for types user, group and everyone (and everyoneExceptGuests) respectively. In case of external groups value is set to the ID of the externalGroup */
    value?: string;
}
