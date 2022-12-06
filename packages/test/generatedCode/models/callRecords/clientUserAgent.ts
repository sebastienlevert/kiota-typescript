import {ClientPlatform} from './clientPlatform';
import {UserAgent} from './index';
import {ProductFamily} from './productFamily';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ClientUserAgent extends Partial<Parsable>, UserAgent {
    /** The unique identifier of the Azure AD application used by this endpoint. */
    azureADAppId?: string;
    /** Immutable resource identifier of the Azure Communication Service associated with this endpoint based on Communication Services APIs. */
    communicationServiceId?: string;
    /** The platform property */
    platform?: ClientPlatform;
    /** The productFamily property */
    productFamily?: ProductFamily;
}
