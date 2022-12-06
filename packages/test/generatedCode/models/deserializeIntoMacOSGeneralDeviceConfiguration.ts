import {AppListType} from './appListType';
import {deserializeIntoAppListItem} from './deserializeIntoAppListItem';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {MacOSGeneralDeviceConfiguration} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSGeneralDeviceConfiguration(macOSGeneralDeviceConfiguration: MacOSGeneralDeviceConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(macOSGeneralDeviceConfiguration),
        "compliantAppListType": n => { macOSGeneralDeviceConfiguration.compliantAppListType = n.getEnumValue<AppListType>(AppListType) as any ; },
        "compliantAppsList": n => { macOSGeneralDeviceConfiguration.compliantAppsList = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppListItem) as any ; },
        "emailInDomainSuffixes": n => { macOSGeneralDeviceConfiguration.emailInDomainSuffixes = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "passwordBlockSimple": n => { macOSGeneralDeviceConfiguration.passwordBlockSimple = n.getBooleanValue() as any ; },
        "passwordExpirationDays": n => { macOSGeneralDeviceConfiguration.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumCharacterSetCount": n => { macOSGeneralDeviceConfiguration.passwordMinimumCharacterSetCount = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { macOSGeneralDeviceConfiguration.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeLock": n => { macOSGeneralDeviceConfiguration.passwordMinutesOfInactivityBeforeLock = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeScreenTimeout": n => { macOSGeneralDeviceConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { macOSGeneralDeviceConfiguration.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequired": n => { macOSGeneralDeviceConfiguration.passwordRequired = n.getBooleanValue() as any ; },
        "passwordRequiredType": n => { macOSGeneralDeviceConfiguration.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType) as any ; },
    }
}
