import {PersonDataSources} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonDataSourcesFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonDataSources {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonDataSources();
}
