import {Entity, PayloadRequest, PayloadResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Command extends Entity, Partial<Parsable> {
    /** The appServiceName property */
    appServiceName?: string;
    /** The error property */
    error_escaped?: string;
    /** The packageFamilyName property */
    packageFamilyName?: string;
    /** The payload property */
    payload?: PayloadRequest;
    /** The permissionTicket property */
    permissionTicket?: string;
    /** The postBackUri property */
    postBackUri?: string;
    /** The responsepayload property */
    responsepayload?: PayloadResponse;
    /** The status property */
    status?: string;
    /** The type property */
    type?: string;
}
