import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {deserializeIntoLocaleInfo} from './deserializeIntoLocaleInfo';
import {UserAccountInformation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserAccountInformation(userAccountInformation: UserAccountInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(userAccountInformation),
        "ageGroup": n => { userAccountInformation.ageGroup = n.getStringValue() as any ; },
        "countryCode": n => { userAccountInformation.countryCode = n.getStringValue() as any ; },
        "preferredLanguageTag": n => { userAccountInformation.preferredLanguageTag = n.getObject(deserializeIntoLocaleInfo) as any ; },
        "userPrincipalName": n => { userAccountInformation.userPrincipalName = n.getStringValue() as any ; },
    }
}
