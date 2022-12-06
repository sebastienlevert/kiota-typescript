import {EdgeSearchEngineBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdgeSearchEngineCustom extends EdgeSearchEngineBase, Partial<Parsable> {
    /** Points to a https link containing the OpenSearch xml file that contains, at minimum, the short name and the URL to the search Engine. */
    edgeSearchEngineOpenSearchXmlUrl?: string;
}
