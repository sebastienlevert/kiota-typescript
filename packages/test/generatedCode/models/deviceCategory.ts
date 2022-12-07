import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCategory extends Entity, Partial<Parsable> {
    /** Optional description for the device category. */
    description?: string;
    /** Display name for the device category. */
    displayName?: string;
    /** Optional role scope tags for the device category. */
    roleScopeTagIds?: string[];
}
