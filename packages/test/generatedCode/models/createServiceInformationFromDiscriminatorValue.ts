import {ServiceInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceInformation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceInformation();
}
