import {Entity} from '../';
import {IdentityType} from './identityType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Identity extends Entity, Partial<Parsable> {
    /** The type of identity. Possible values are: user or group for Azure AD identities and externalgroup for groups in an external system. */
    type?: IdentityType;
}
