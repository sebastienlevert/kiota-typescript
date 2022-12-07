import {PersonWebsite} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonWebsiteFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonWebsite {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonWebsite();
}
