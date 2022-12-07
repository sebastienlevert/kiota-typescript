import {Command} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCommandFromDiscriminatorValue(parseNode: ParseNode | undefined) : Command {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Command();
}
