import {deserializeIntoEntity} from './deserializeIntoEntity';
import {VppToken} from './index';
import {VppTokenAccountType} from './vppTokenAccountType';
import {VppTokenState} from './vppTokenState';
import {VppTokenSyncStatus} from './vppTokenSyncStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVppToken(vppToken: VppToken | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(vppToken),
        "appleId": n => { vppToken.appleId = n.getStringValue() as any ; },
        "automaticallyUpdateApps": n => { vppToken.automaticallyUpdateApps = n.getBooleanValue() as any ; },
        "countryOrRegion": n => { vppToken.countryOrRegion = n.getStringValue() as any ; },
        "expirationDateTime": n => { vppToken.expirationDateTime = n.getDateValue() as any ; },
        "lastModifiedDateTime": n => { vppToken.lastModifiedDateTime = n.getDateValue() as any ; },
        "lastSyncDateTime": n => { vppToken.lastSyncDateTime = n.getDateValue() as any ; },
        "lastSyncStatus": n => { vppToken.lastSyncStatus = n.getEnumValue<VppTokenSyncStatus>(VppTokenSyncStatus) as any ; },
        "organizationName": n => { vppToken.organizationName = n.getStringValue() as any ; },
        "state": n => { vppToken.state = n.getEnumValue<VppTokenState>(VppTokenState) as any ; },
        "token": n => { vppToken.token = n.getStringValue() as any ; },
        "vppTokenAccountType": n => { vppToken.vppTokenAccountType = n.getEnumValue<VppTokenAccountType>(VppTokenAccountType) as any ; },
    }
}
