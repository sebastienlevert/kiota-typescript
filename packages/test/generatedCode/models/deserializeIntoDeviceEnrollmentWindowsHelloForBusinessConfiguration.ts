import {deserializeIntoDeviceEnrollmentConfiguration} from './deserializeIntoDeviceEnrollmentConfiguration';
import {Enablement} from './enablement';
import {DeviceEnrollmentWindowsHelloForBusinessConfiguration} from './index';
import {WindowsHelloForBusinessPinUsage} from './windowsHelloForBusinessPinUsage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentWindowsHelloForBusinessConfiguration(deviceEnrollmentWindowsHelloForBusinessConfiguration: DeviceEnrollmentWindowsHelloForBusinessConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceEnrollmentConfiguration(deviceEnrollmentWindowsHelloForBusinessConfiguration),
        "enhancedBiometricsState": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.enhancedBiometricsState = n.getEnumValue<Enablement>(Enablement) as any ; },
        "pinExpirationInDays": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinExpirationInDays = n.getNumberValue() as any ; },
        "pinLowercaseCharactersUsage": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinLowercaseCharactersUsage = n.getEnumValue<WindowsHelloForBusinessPinUsage>(WindowsHelloForBusinessPinUsage) as any ; },
        "pinMaximumLength": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinMaximumLength = n.getNumberValue() as any ; },
        "pinMinimumLength": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinMinimumLength = n.getNumberValue() as any ; },
        "pinPreviousBlockCount": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinPreviousBlockCount = n.getNumberValue() as any ; },
        "pinSpecialCharactersUsage": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinSpecialCharactersUsage = n.getEnumValue<WindowsHelloForBusinessPinUsage>(WindowsHelloForBusinessPinUsage) as any ; },
        "pinUppercaseCharactersUsage": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.pinUppercaseCharactersUsage = n.getEnumValue<WindowsHelloForBusinessPinUsage>(WindowsHelloForBusinessPinUsage) as any ; },
        "remotePassportEnabled": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.remotePassportEnabled = n.getBooleanValue() as any ; },
        "securityDeviceRequired": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.securityDeviceRequired = n.getBooleanValue() as any ; },
        "state": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.state = n.getEnumValue<Enablement>(Enablement) as any ; },
        "unlockWithBiometricsEnabled": n => { deviceEnrollmentWindowsHelloForBusinessConfiguration.unlockWithBiometricsEnabled = n.getBooleanValue() as any ; },
    }
}
