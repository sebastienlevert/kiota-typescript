import {SynchronizationTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : SynchronizationTemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SynchronizationTemplate();
}
