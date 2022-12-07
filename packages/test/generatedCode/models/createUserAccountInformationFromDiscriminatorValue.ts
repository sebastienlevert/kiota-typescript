import {UserAccountInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserAccountInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserAccountInformation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserAccountInformation();
}
