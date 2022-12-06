import {Json, ManagedAppStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusRaw extends ManagedAppStatus, Partial<Parsable> {
    /** Status report content. */
    content?: Json;
}
