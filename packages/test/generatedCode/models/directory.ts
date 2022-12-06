import {AdministrativeUnit, DirectoryObject, Entity, IdentityProviderBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Directory extends Entity, Partial<Parsable> {
    /** Conceptual container for user and group directory objects. */
    administrativeUnits?: AdministrativeUnit[];
    /** Recently deleted items. Read-only. Nullable. */
    deletedItems?: DirectoryObject[];
    /** Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol. */
    federationConfigurations?: IdentityProviderBase[];
}
