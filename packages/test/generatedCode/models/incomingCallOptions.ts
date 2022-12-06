import {CallOptions} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IncomingCallOptions extends CallOptions, Partial<Parsable> {
}
