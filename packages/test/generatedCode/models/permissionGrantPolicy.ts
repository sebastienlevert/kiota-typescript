import {PermissionGrantConditionSet, PolicyBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PermissionGrantPolicy extends Partial<Parsable>, PolicyBase {
    /** Condition sets which are excluded in this permission grant policy. Automatically expanded on GET. */
    excludes?: PermissionGrantConditionSet[];
    /** Condition sets which are included in this permission grant policy. Automatically expanded on GET. */
    includes?: PermissionGrantConditionSet[];
}
