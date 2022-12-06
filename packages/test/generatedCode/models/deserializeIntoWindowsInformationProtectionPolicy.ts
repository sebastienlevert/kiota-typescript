import {deserializeIntoWindowsInformationProtection} from './deserializeIntoWindowsInformationProtection';
import {WindowsInformationProtectionPolicy} from './index';
import {WindowsInformationProtectionPinCharacterRequirements} from './windowsInformationProtectionPinCharacterRequirements';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionPolicy(windowsInformationProtectionPolicy: WindowsInformationProtectionPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsInformationProtection(windowsInformationProtectionPolicy),
        "daysWithoutContactBeforeUnenroll": n => { windowsInformationProtectionPolicy.daysWithoutContactBeforeUnenroll = n.getNumberValue() as any ; },
        "mdmEnrollmentUrl": n => { windowsInformationProtectionPolicy.mdmEnrollmentUrl = n.getStringValue() as any ; },
        "minutesOfInactivityBeforeDeviceLock": n => { windowsInformationProtectionPolicy.minutesOfInactivityBeforeDeviceLock = n.getNumberValue() as any ; },
        "numberOfPastPinsRemembered": n => { windowsInformationProtectionPolicy.numberOfPastPinsRemembered = n.getNumberValue() as any ; },
        "passwordMaximumAttemptCount": n => { windowsInformationProtectionPolicy.passwordMaximumAttemptCount = n.getNumberValue() as any ; },
        "pinExpirationDays": n => { windowsInformationProtectionPolicy.pinExpirationDays = n.getNumberValue() as any ; },
        "pinLowercaseLetters": n => { windowsInformationProtectionPolicy.pinLowercaseLetters = n.getEnumValue<WindowsInformationProtectionPinCharacterRequirements>(WindowsInformationProtectionPinCharacterRequirements) as any ; },
        "pinMinimumLength": n => { windowsInformationProtectionPolicy.pinMinimumLength = n.getNumberValue() as any ; },
        "pinSpecialCharacters": n => { windowsInformationProtectionPolicy.pinSpecialCharacters = n.getEnumValue<WindowsInformationProtectionPinCharacterRequirements>(WindowsInformationProtectionPinCharacterRequirements) as any ; },
        "pinUppercaseLetters": n => { windowsInformationProtectionPolicy.pinUppercaseLetters = n.getEnumValue<WindowsInformationProtectionPinCharacterRequirements>(WindowsInformationProtectionPinCharacterRequirements) as any ; },
        "revokeOnMdmHandoffDisabled": n => { windowsInformationProtectionPolicy.revokeOnMdmHandoffDisabled = n.getBooleanValue() as any ; },
        "windowsHelloForBusinessBlocked": n => { windowsInformationProtectionPolicy.windowsHelloForBusinessBlocked = n.getBooleanValue() as any ; },
    }
}
