import {KeyValuePair, ManagedAppPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppConfiguration extends ManagedAppPolicy, Partial<Parsable> {
    /** A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service */
    customSettings?: KeyValuePair[];
}
