import React from 'react';

const Blogs = () => {
    return (
      <div className="container mx-auto px-4 mb-20">
        <h1 className="text-3xl font-bold text-center my-10">Blog Page</h1>
        <div className="lg:w-3/4 mx-auto">
          <div className="mb-6">
            <p className="text-xl font-semibold mb-2">
              <span className="text-red-600"> Question 1.</span> What is an
              access token and refresh token? How do they work and where should
              we store them on the client-side?
            </p>
            <p className="ml-10">
              <span className="font-semibold">Ans:</span> An access token is a
              temporary set of data which represents the authorization grnted to
              a client to access the server data. If the user logs in
              successfully using the vaild data then the user is given a access
              token to get certain data from the server.
              <br />
              <br /> A refresh token is a long-term used to obtain a set of data
              that can be used when the original token expires. it normally
              generated when the initial authentication process happens.
              <br />
              <br />
              It should be stored somewhere secure on the client-side to prevent
              unauthorized access. this can be stored on the local storage, but
              local storage is not enough secure. HTTP cookies are more secure
              than local storage. this can be also store using redux or context
              api.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-semibold mb-2">
              <span className="text-red-600"> Question 2.</span> Compare SQL and
              NoSQL databases?
            </p>
            <p className="ml-10">
              <span className="font-semibold">Ans: </span>SQL is mainly
              retational database and its structured database, on the other hand
              noSQL is non-relational or distributed database and its not so
              structured .<br />
              <br />
              SQL database follows a predefined schema and noSQL databse use
              dynamic schema for unstructured data. noSQL database is more
              flexibel to use than SQL database.
              <br />
              <br />
              SQL databases are table-based on the other hand NoSQL databases
              are either key-value pairs, document-based, graph databases, or
              wide-column stores.<br></br>
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-semibold mb-2">
              <span className="text-red-600"> Question 3.</span> What is express
              js? What is Nest JS?
            </p>
            <p className="ml-10">
              <span className="font-semibold">Ans: </span>Express.js and NestJS
              are both popular web frameworks for building server-side
              applications and both of them are based on Node.js.
              <br />
              <br />
              Express.js is quite simple and flexible web framework of Node.js,
              it was designed to buildweb applications and APIs straightforward.
              It gives a set of simple and intuitive APIs to handle routing,
              middleware, and HTTP request/response handling. Express.js follows
              a middleware-based architecture, where each middleware function
              can handle specific tasks before passing the request to the next
              middleware or final route handler.
              <br />
              <br />
              NestJS is also a Node.js based framework designed for building
              scalable and efficient server-side applications. It is built on
              top of Express.js but provides additional features and
              architectural more like MVC patterns. NestJS follows the modular
              and dependency-injection design principles, making it suitable for
              building complex applications with a clear separation of concerns.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-semibold mb-2">
              <span className="text-red-600"> Question 4.</span> What is MongoDB
              aggregate and how does it work?
            </p>
            <p className="ml-10">
              <span className="font-semibold">Ans: </span>MongoDB Aggregation
              uses an aggregate() method to perform the aggregation operations.
              Basically, this aggregation operation practices data records and
              provides calculated results. The aggregation operations assemble
              values from various documents together and are able to execute a
              range of operations, such as average, sum, maximum, minimum, etc.,
              on the assembled data to provide only a result. A corresponding of
              MongoDB Aggregation in SQL is count(*) and with the group by.
              MongoDB Aggregation is identical to the aggregate function
              provided in SQL.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;