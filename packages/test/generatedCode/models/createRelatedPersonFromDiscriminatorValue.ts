import {RelatedPerson} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRelatedPersonFromDiscriminatorValue(parseNode: ParseNode | undefined) : RelatedPerson {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RelatedPerson();
}
