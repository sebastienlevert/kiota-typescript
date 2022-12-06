import {CallOptions} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutgoingCallOptions extends CallOptions, Partial<Parsable> {
}
