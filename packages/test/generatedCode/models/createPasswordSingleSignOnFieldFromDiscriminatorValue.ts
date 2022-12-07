import {PasswordSingleSignOnField} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordSingleSignOnFieldFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordSingleSignOnField {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordSingleSignOnField();
}
