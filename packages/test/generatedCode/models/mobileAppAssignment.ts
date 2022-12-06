import {DeviceAndAppManagementAssignmentTarget, Entity, MobileAppAssignmentSettings} from './index';
import {InstallIntent} from './installIntent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppAssignment extends Entity, Partial<Parsable> {
    /** Possible values for the install intent chosen by the admin. */
    intent?: InstallIntent;
    /** The settings for target assignment defined by the admin. */
    settings?: MobileAppAssignmentSettings;
    /** The target group assignment defined by the admin. */
    target?: DeviceAndAppManagementAssignmentTarget;
}
