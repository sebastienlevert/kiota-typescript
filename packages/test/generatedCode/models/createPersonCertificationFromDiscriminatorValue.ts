import {PersonCertification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonCertificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonCertification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonCertification();
}
