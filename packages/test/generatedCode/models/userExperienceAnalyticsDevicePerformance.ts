import {DiskType} from './diskType';
import {Entity} from './index';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsDevicePerformance extends Entity, Partial<Parsable> {
    /** Average (mean) number of Blue Screens per device in the last 30 days. Valid values 0 to 9999999 */
    averageBlueScreens?: number;
    /** Average (mean) number of Restarts per device in the last 30 days. Valid values 0 to 9999999 */
    averageRestarts?: number;
    /** Number of Blue Screens in the last 30 days. Valid values 0 to 9999999 */
    blueScreenCount?: number;
    /** The user experience analytics device boot score. */
    bootScore?: number;
    /** The user experience analytics device core boot time in milliseconds. */
    coreBootTimeInMs?: number;
    /** The user experience analytics device core login time in milliseconds. */
    coreLoginTimeInMs?: number;
    /** User experience analytics summarized device count. */
    deviceCount?: number;
    /** The user experience analytics device name. */
    deviceName?: string;
    /** The diskType property */
    diskType?: DiskType;
    /** The user experience analytics device group policy boot time in milliseconds. */
    groupPolicyBootTimeInMs?: number;
    /** The user experience analytics device group policy login time in milliseconds. */
    groupPolicyLoginTimeInMs?: number;
    /** The healthStatus property */
    healthStatus?: UserExperienceAnalyticsHealthState;
    /** The user experience analytics device login score. */
    loginScore?: number;
    /** The user experience analytics device manufacturer. */
    manufacturer?: string;
    /** The user experience analytics device model. */
    model?: string;
    /** The user experience analytics model level startup performance score. Valid values -1.79769313486232E+308 to 1.79769313486232E+308 */
    modelStartupPerformanceScore?: number;
    /** The user experience analytics device Operating System version. */
    operatingSystemVersion?: string;
    /** The user experience analytics responsive desktop time in milliseconds. */
    responsiveDesktopTimeInMs?: number;
    /** Number of Restarts in the last 30 days. Valid values 0 to 9999999 */
    restartCount?: number;
    /** The user experience analytics device startup performance score. Valid values -1.79769313486232E+308 to 1.79769313486232E+308 */
    startupPerformanceScore?: number;
}
