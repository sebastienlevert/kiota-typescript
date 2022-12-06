import {EmailRole} from './emailRole';
import {UserSecurityState} from './index';
import {LogonType} from './logonType';
import {UserAccountSecurityType} from './userAccountSecurityType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSecurityState(userSecurityState: UserSecurityState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "aadUserId": n => { userSecurityState.aadUserId = n.getStringValue() as any ; },
        "accountName": n => { userSecurityState.accountName = n.getStringValue() as any ; },
        "domainName": n => { userSecurityState.domainName = n.getStringValue() as any ; },
        "emailRole": n => { userSecurityState.emailRole = n.getEnumValue<EmailRole>(EmailRole) as any ; },
        "isVpn": n => { userSecurityState.isVpn = n.getBooleanValue() as any ; },
        "logonDateTime": n => { userSecurityState.logonDateTime = n.getDateValue() as any ; },
        "logonId": n => { userSecurityState.logonId = n.getStringValue() as any ; },
        "logonIp": n => { userSecurityState.logonIp = n.getStringValue() as any ; },
        "logonLocation": n => { userSecurityState.logonLocation = n.getStringValue() as any ; },
        "logonType": n => { userSecurityState.logonType = n.getEnumValue<LogonType>(LogonType) as any ; },
        "@odata.type": n => { userSecurityState.odataType = n.getStringValue() as any ; },
        "onPremisesSecurityIdentifier": n => { userSecurityState.onPremisesSecurityIdentifier = n.getStringValue() as any ; },
        "riskScore": n => { userSecurityState.riskScore = n.getStringValue() as any ; },
        "userAccountType": n => { userSecurityState.userAccountType = n.getEnumValue<UserAccountSecurityType>(UserAccountSecurityType) as any ; },
        "userPrincipalName": n => { userSecurityState.userPrincipalName = n.getStringValue() as any ; },
    }
}
