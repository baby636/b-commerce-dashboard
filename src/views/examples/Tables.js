/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Pending and Completed Orders</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col" style={{color:'#67D0DD',fontWeight:'bold',fontSize:'12px'}}>Item</th>
                    <th scope="col" style={{color:'#67D0DD',fontWeight:'bold',fontSize:'12px'}}>Amount</th>
                    <th scope="col" style={{color:'#67D0DD',fontWeight:'bold',fontSize:'12px'}}>Status</th>
                    <th scope="col" style={{color:'#67D0DD',fontWeight:'bold',fontSize:'12px'}}>Customer</th>
                    <th scope="col" style={{color:'#67D0DD',fontWeight:'bold',fontSize:'12px'}}>Purchase Date</th>
                    <th scope="col" style={{color:'#67D0DD',fontWeight:'bold',fontSize:'12px'}}>Transaction</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={"https://cloudflare-ipfs.com/ipfs/QmYMJ2NNRzeiqKRoF2Z5fCEoxTFGasnDZHReZQd5TqmyDf"}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Coozie
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$5 / ⧫.00029</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
                      </Badge>
                    </td>
                    <td>
                      <div>
                        <strong>0x6cvk10g78</strong>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                          5/08/2021
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                      <a target="_blank" href="https://etherscan.io/tx/0xf50358fc5b8c26a03688e73c0804b7dcf6e533b728c84b61f623edb45b6d306b">View on Etherscan</a>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            What else?
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={"https://cloudflare-ipfs.com/ipfs/QmejU4MYdfGLitNEVwGSuBD2zesKa7G9sFhpqUUcGpd5B9"}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Mask
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$10 / ⧫.00048 </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        completed
                      </Badge>
                    </td>
                    <td>
                      <div>
                        <strong>0x9998887776</strong>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                          4/02/2021
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                      <a target="_blank" href="https://etherscan.io/tx/0xf50358fc5b8c26a03688e73c0804b7dcf6e533b728c84b61f623edb45b6d306b">View on Etherscan</a>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            What else?
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={"https://cloudflare-ipfs.com/ipfs/QmR5sYByCjZeJ57DpRxgUQYeT1asxAknZGuDR63iW9AbwY"}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Tote
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$15 / ⧫.0005</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        completed
                      </Badge>
                    </td>
                    <td>
                      <div>
                        <strong>0xeeeaaa1234</strong>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                          3/20/2021
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                      <a target="_blank" href="https://etherscan.io/tx/0xf50358fc5b8c26a03688e73c0804b7dcf6e533b728c84b61f623edb45b6d306b">View on Etherscan</a>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            What else?
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={"https://cloudflare-ipfs.com/ipfs/QmYMJ2NNRzeiqKRoF2Z5fCEoxTFGasnDZHReZQd5TqmyDf"}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Coozie
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$5 / ⧫.00029</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        completed
                      </Badge>
                    </td>
                    <td>
                      <div>
                        <strong>0x0987654321</strong>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                          3/11/2021
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                      <a target="_blank" href="https://etherscan.io/tx/0xf50358fc5b8c26a03688e73c0804b7dcf6e533b728c84b61f623edb45b6d306b">View on Etherscan</a>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            What else?
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
