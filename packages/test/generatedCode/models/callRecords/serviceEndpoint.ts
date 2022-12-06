import {Endpoint} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceEndpoint extends Endpoint, Partial<Parsable> {
}
