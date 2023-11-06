/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import oneway from '../../assets/th58.jpeg';
import nodenpm from '../../assets/th.jpeg';
import diff from '../../assets/th1.jpeg';
export default function Blogs() {
    return (
        <div>
            <div className="text-center py-5">
                <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Corporate Applications</h3>
                <h2 className="font-open-sans text-4xl font-bold">My Blogs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 px-20 py-6">
                <div className="col-span-8 space-y-12">
                    {/* first blog */}
                    <div>
                        <Card>

                            <CardMedia
                                sx={{ padding: '20px' }}
                                component="img"
                                height="140"
                                image={oneway}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    What is One way data binding?
                                </Typography>
                                <Typography sx={{ marginBottom: '8px' }} variant="body2" color="text.secondary">
                                    Ans : One-way data binding is a concept in web development where data flows in a single direction. The data source (like a database or application state) sends information to the user interface, but the user interface doesn't send data back to the source. This setup makes it easy to understand how data is updated and ensures that the user interface always shows the latest information.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    In simpler terms, imagine it as a one-lane road where traffic flows in one direction. Data goes from the source to the user interface, but it can't come back from the user interface to the source. This makes it predictable and easy to manage.
                                </Typography>
                            </CardContent>

                        </Card>
                    </div>
                    {/* second blog */}
                    <div>
                        <Card>

                            <CardMedia
                                sx={{ padding: '20px' }}
                                component="img"
                                height="140"
                                image={nodenpm}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    What is NPM in node.js?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Ans : NPM stands for "Node Package Manager." It is a tool that comes with Node.js, and its primary job is to help you easily manage and install packages (which are like libraries or code modules) for your Node.js projects. These packages can include useful code, frameworks, or tools created by other developers, making it simpler for you to build applications without starting from scratch. NPM also allows you to share your own code packages with the wider development community. So, in short, NPM is a handy tool that makes it easier to find, install, and use code packages when you're working with Node.js.
                                </Typography>
                            </CardContent>

                        </Card>
                    </div>
                    {/* third blog */}
                    <div>
                        <Card>

                            <CardMedia
                                sx={{ padding: '20px' }}
                                component="img"
                                height="140"
                                image={diff}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Different between Mongodb database vs mySQL database.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Ans : MongoDB and MySQL are contrasting database systems used for data management. MongoDB employs a dynamic, JSON-like data structure, allowing for fluid changes in data organization, while MySQL relies on structured tables with predefined schemas, necessitating a fixed structure from the outset. MongoDB excels at horizontal scalability, accommodating large datasets and traffic by adding servers, while MySQL is better suited for vertical scalability, enhancing the performance of a single server. MongoDB features a flexible query language, advantageous for diverse data types, whereas MySQL employs SQL, tailored for structured data within tables. Complex data joins are better handled by MySQL, making it suitable for applications with intricate relationships, while MongoDB, not designed for complex joins, encourages data embedding within documents. MongoDB is schema-less, enabling on-the-fly data structure modifications, whereas MySQL is schema-based, demanding upfront structure definitions. MongoDB, although it supports transactions in recent versions, is not as strict in data consistency as MySQL, which upholds strong integrity. The vibrant MongoDB community finds its place in modern web development, while MySQL is a staple in traditional enterprise applications, each serving distinct project needs.
                                </Typography>
                            </CardContent>

                        </Card>
                    </div>
                </div>
                <div className="col-span-4">

                </div>
            </div>
        </div>
    )
}
