import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DiskType} from './diskType';
import {UserExperienceAnalyticsDevicePerformance} from './index';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsDevicePerformance(userExperienceAnalyticsDevicePerformance: UserExperienceAnalyticsDevicePerformance | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsDevicePerformance),
        "averageBlueScreens": n => { userExperienceAnalyticsDevicePerformance.averageBlueScreens = n.getNumberValue() as any ; },
        "averageRestarts": n => { userExperienceAnalyticsDevicePerformance.averageRestarts = n.getNumberValue() as any ; },
        "blueScreenCount": n => { userExperienceAnalyticsDevicePerformance.blueScreenCount = n.getNumberValue() as any ; },
        "bootScore": n => { userExperienceAnalyticsDevicePerformance.bootScore = n.getNumberValue() as any ; },
        "coreBootTimeInMs": n => { userExperienceAnalyticsDevicePerformance.coreBootTimeInMs = n.getNumberValue() as any ; },
        "coreLoginTimeInMs": n => { userExperienceAnalyticsDevicePerformance.coreLoginTimeInMs = n.getNumberValue() as any ; },
        "deviceCount": n => { userExperienceAnalyticsDevicePerformance.deviceCount = n.getNumberValue() as any ; },
        "deviceName": n => { userExperienceAnalyticsDevicePerformance.deviceName = n.getStringValue() as any ; },
        "diskType": n => { userExperienceAnalyticsDevicePerformance.diskType = n.getEnumValue<DiskType>(DiskType) as any ; },
        "groupPolicyBootTimeInMs": n => { userExperienceAnalyticsDevicePerformance.groupPolicyBootTimeInMs = n.getNumberValue() as any ; },
        "groupPolicyLoginTimeInMs": n => { userExperienceAnalyticsDevicePerformance.groupPolicyLoginTimeInMs = n.getNumberValue() as any ; },
        "healthStatus": n => { userExperienceAnalyticsDevicePerformance.healthStatus = n.getEnumValue<UserExperienceAnalyticsHealthState>(UserExperienceAnalyticsHealthState) as any ; },
        "loginScore": n => { userExperienceAnalyticsDevicePerformance.loginScore = n.getNumberValue() as any ; },
        "manufacturer": n => { userExperienceAnalyticsDevicePerformance.manufacturer = n.getStringValue() as any ; },
        "model": n => { userExperienceAnalyticsDevicePerformance.model = n.getStringValue() as any ; },
        "modelStartupPerformanceScore": n => { userExperienceAnalyticsDevicePerformance.modelStartupPerformanceScore = n.getNumberValue() as any ; },
        "operatingSystemVersion": n => { userExperienceAnalyticsDevicePerformance.operatingSystemVersion = n.getStringValue() as any ; },
        "responsiveDesktopTimeInMs": n => { userExperienceAnalyticsDevicePerformance.responsiveDesktopTimeInMs = n.getNumberValue() as any ; },
        "restartCount": n => { userExperienceAnalyticsDevicePerformance.restartCount = n.getNumberValue() as any ; },
        "startupPerformanceScore": n => { userExperienceAnalyticsDevicePerformance.startupPerformanceScore = n.getNumberValue() as any ; },
    }
}
