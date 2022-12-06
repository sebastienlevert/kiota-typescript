import {WindowsUpdateInstallScheduleType} from './index';
import {Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface WindowsUpdateActiveHoursInstall extends Partial<Parsable>, WindowsUpdateInstallScheduleType {
    /** Active Hours End */
    activeHoursEnd?: TimeOnly;
    /** Active Hours Start */
    activeHoursStart?: TimeOnly;
}
