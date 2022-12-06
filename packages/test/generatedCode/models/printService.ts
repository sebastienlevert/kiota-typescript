import {Entity, PrintServiceEndpoint} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintService extends Entity, Partial<Parsable> {
    /** Endpoints that can be used to access the service. Read-only. Nullable. */
    endpoints?: PrintServiceEndpoint[];
}
