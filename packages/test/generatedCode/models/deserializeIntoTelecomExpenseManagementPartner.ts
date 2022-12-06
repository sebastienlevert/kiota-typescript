import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TelecomExpenseManagementPartner} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTelecomExpenseManagementPartner(telecomExpenseManagementPartner: TelecomExpenseManagementPartner | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(telecomExpenseManagementPartner),
        "appAuthorized": n => { telecomExpenseManagementPartner.appAuthorized = n.getBooleanValue() as any ; },
        "displayName": n => { telecomExpenseManagementPartner.displayName = n.getStringValue() as any ; },
        "enabled": n => { telecomExpenseManagementPartner.enabled = n.getBooleanValue() as any ; },
        "lastConnectionDateTime": n => { telecomExpenseManagementPartner.lastConnectionDateTime = n.getDateValue() as any ; },
        "url": n => { telecomExpenseManagementPartner.url = n.getStringValue() as any ; },
    }
}
