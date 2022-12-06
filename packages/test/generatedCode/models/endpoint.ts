import {DirectoryObject} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Endpoint extends DirectoryObject, Partial<Parsable> {
    /** The capability property */
    capability?: string;
    /** The providerId property */
    providerId?: string;
    /** The providerName property */
    providerName?: string;
    /** The providerResourceId property */
    providerResourceId?: string;
    /** The uri property */
    uri?: string;
}
