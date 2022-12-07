import {deserializeIntoPasswordSingleSignOnField} from './deserializeIntoPasswordSingleSignOnField';
import {PasswordSingleSignOnSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordSingleSignOnSettings(passwordSingleSignOnSettings: PasswordSingleSignOnSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "fields": n => { passwordSingleSignOnSettings.fields = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPasswordSingleSignOnField) as any ; },
    }
}
