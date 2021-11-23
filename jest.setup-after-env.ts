import * as testUtils from "@skylib/framework/es/testUtils";
import * as functionsTestUtils from "@skylib/functions/es/testUtils";

functionsTestUtils.jestSetup();
functionsTestUtils.jestSetup.dom();
testUtils.jestSetup();
testUtils.jestSetup.dom();
beforeEach(functionsTestUtils.jestReset);
beforeEach(functionsTestUtils.jestReset.dom);
beforeEach(testUtils.jestReset);
beforeEach(testUtils.jestReset.dom);
