import {DeviceAndAppManagementAssignmentTarget, Entity} from './index';
import {InstallIntent} from './installIntent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedEBookAssignment extends Entity, Partial<Parsable> {
    /** Possible values for the install intent chosen by the admin. */
    installIntent?: InstallIntent;
    /** The assignment target for eBook. */
    target?: DeviceAndAppManagementAssignmentTarget;
}
