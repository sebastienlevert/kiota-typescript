import {PasswordSingleSignOnField} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordSingleSignOnField(passwordSingleSignOnField: PasswordSingleSignOnField | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "customizedLabel": n => { passwordSingleSignOnField.customizedLabel = n.getStringValue() as any ; },
        "defaultLabel": n => { passwordSingleSignOnField.defaultLabel = n.getStringValue() as any ; },
        "fieldId": n => { passwordSingleSignOnField.fieldId = n.getStringValue() as any ; },
        "type": n => { passwordSingleSignOnField.type = n.getStringValue() as any ; },
    }
}
