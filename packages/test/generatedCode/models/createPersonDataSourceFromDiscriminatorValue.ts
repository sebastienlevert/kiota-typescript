import {PersonDataSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonDataSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonDataSource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonDataSource();
}
