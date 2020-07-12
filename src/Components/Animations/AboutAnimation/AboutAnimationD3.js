import React from 'react';
import * as d3 from 'd3';

const flatData = [
    {"row_id": "111", "ou_name": "Company", "parent": null}, 
    {"row_id": "112", "ou_name": "Sawmill #1", "parent": "111" },
    {"row_id": "113", "ou_name": "Home Office", "parent": "111" },
    {"row_id": "114", "ou_name": "Marketing", "parent": "112" },
    {"row_id": "115", "ou_name": "Marketing", "parent": "113" },
    {"row_id": "116", "ou_name": "Sales", "parent": "112" },
    {"row_id": "117", "ou_name": "Customer Support", "parent": "112" },
    {"row_id": "118", "ou_name": "Accounting", "parent": "112" },
    {"row_id": "119", "ou_name": "User 11", "parent": "114" },
    {"row_id": "120", "ou_name": "User 1", "parent": "115" },
    {"row_id": "121", "ou_name": "User 2", "parent": "115" },
    {"row_id": "122", "ou_name": "User 3", "parent": "118" },
    {"row_id": "123", "ou_name": "User 4", "parent": "118" },
    {"row_id": "124", "ou_name": "User 5", "parent": "118" },
    {"row_id": "125", "ou_name": "User 6", "parent": "118" },
    {"row_id": "126", "ou_name": "User 7", "parent": "118" },
    {"row_id": "127", "ou_name": "User 8", "parent": "118" },
    {"row_id": "128", "ou_name": "User 9", "parent": "118" },
    {"row_id": "129", "ou_name": "User 10", "parent": "118" },
    {"row_id": "119", "ou_name": "User 12", "parent": "114" }
  ];
  class AboutD3 extends React.Component{
      constructor(props){
          super(props);
          this.drawChart = this.drawChart.bind(this);
      }
      componentDidMount(){
          this.drawChart();
      }
      drawChart(){
          //convert flatData into Hierarchy Data
          let treeData =  d3.stratify()
                            .id(function(d){return d.row_id})
                            .parentId(function(d){return d.parent})
                            (flatData);
            
          //Assign name to each node
          treeData.each(function(d){
              console.log(d,d.id,d.name);
              d.name = d.data.ou_name;
          })

          
          // Creates a curved (diagonal) path from parent to the child nodes
          const bizamajig__bind__tree__diagonal = function( s, d ) {
            const path = `M ${s.y} ${s.x}
                    C ${(s.y + d.y) / 2} ${s.x},
                      ${(s.y + d.y) / 2} ${d.x},
                      ${d.y} ${d.x}`;
            return path;
          }


          var bizamajig__bind__tree__collapse = function( d ) {
            if ( d.children ) {
              d._children = d.children
              d._children.forEach( bizamajig__bind__tree__collapse )
              d.children = null
            }
          }

        let input__node_data;
        let margin = {top: 20, right: 90, bottom: 30, left: 90};
        let width = 960 - margin.left - margin.right;
        let height = 500 - margin.top - margin.bottom;
        
        let svg = d3.select('.skills')
                    .append( 'svg' )
                    .attr( 'width', width + margin.right + margin.left)
                    .attr( 'height', height + margin.top + margin.bottom)
                    .append( 'g' )
                    .attr( 'transform', 'translate('+ margin.left + "," + margin.top + ')');
        
        
        let i = 0;
        let duration = 750;

        input__node_data = d3.hierarchy( treeData, function( d ) {
            return d.children;
          });
          
        input__node_data.x0 = height / 2;
        input__node_data.y0 = 0;
        
  var bizamajig__bind__tree__update = function( source ) {

    // 	Assigns the x and y position for the nodes
    // 	maps the node data to the tree layout
    let bizamajig__fn__treemap = d3.tree().size( [ height, width ] );
            var input__tree_data = bizamajig__fn__treemap( input__node_data );
    
    // 	Compute the new tree layout.
        var input__nodes = input__tree_data.descendants(),
            input__links = input__tree_data.descendants().slice(1);
    
    // 	Normalize for fixed-depth.
        input__nodes.forEach( function( d ){
            d.y = d.depth * 180;
        });
    
    ////////////////////////////////////////////////////////////////////////////////////
    //
    //	START TREE - UPDATE - NODES
    //
    
    // 	Update the nodes...

        var input__node = svg.selectAll('g.node')
            .data( input__nodes, function( d ) {return d.id || (d.id = ++i); });
    
    // 	Enter any new nodes at the parent's previous position.
        var nodeEnter = input__node.enter().append('g')
            .attr( 'class', 'node' )
            .attr( 'transform', function( d ) {
              return "translate(" + source.y0 + "," + source.x0 + ")";
          })
          .on( 'click', bizamajig__bind__tree__toggle_children );
    
    //	Add Circle for the nodes
        nodeEnter.append('circle')
            .attr( 'class', 'node' )
            .attr( 'r', 1e-6 )
            .style( 'fill', function( d ) {
                return d._children ? "lightsteelblue" : "#fff";
            });
    
    //	Add labels for the nodes
        nodeEnter.append( 'text' )
            .attr( 'dy', '.35em' )
            .attr( 'x', function( d ) {
                return d.children || d._children ? -13 : 13;
            })
            .attr( 'text-anchor', function( d ) {
                return d.children || d._children ? 'end' : 'start';
            })
            .text( function( d ) { return d.data.name; });
    
    //	UPDATE
        var nodeUpdate = nodeEnter.merge( input__node );
    
    //	Transition to the proper position for the node
        nodeUpdate.transition()
          .duration(duration)
          .attr( 'transform', function( d ) { 
              return 'translate(' + d.y + ',' + d.x + ')';
           });
    
    //	Update the node attributes and style
        nodeUpdate.select( 'circle.node' )
          .attr( 'r', 10 )
          .style( 'fill', function( d ) {
              return d._children ? "lightsteelblue" : "#fff";
          })
          .attr( 'cursor', 'pointer' );
    
    
    //	Remove any exiting nodes
        const nodeExit = input__node.exit().transition()
            .duration(duration)
            .attr( 'transform', function(d) {
                return 'translate(' + source.y + ',' + source.x + ')';
            })
            .remove();
    
    //	On exit reduce the node circles size to 0
        nodeExit.select( 'circle' )
          .attr( 'r', 1e-6 );
    
    //	On exit reduce the opacity of text labels
        nodeExit.select( 'text' )
          .style( 'fill-opacity', 1e-6 );
    
    //
    //	END TREE - UPDATE - NODES
    //
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    //
    //	START TREE - UPDATE - LINKS
    //
    /*
    //
    //  SEE - http://stackoverflow.com/questions/38310768/d3-js-v4-wacky-link-transition-in-collapsible-tree-example
    //
    Looks like an issue with the keys used for the link's data binding. I'm referring to the fact that if you call .data(links) without a 2nd argument, d3 uses i as the key when it computes the enter/update/exit sets, and so when you expand/collapse the same link can have different i values.
    
    I believe I got it working, and all I did was add that 2nd param as a function that constructs a unique link id by combining the node's id with its parent node's id.
    
    I.e. instead of this...
    
    var link = svg.selectAll("path.link")
      .data(links)
    
    Use this...
    
    var link = svg.selectAll("path.link")
    //.data( links, function( d ) { var id = d.id + '->' + d.parent.id; return id; });
      .data( links,function( d ) { return d.id; });
    */
    
    //	Update the links...
        var input__link = svg.selectAll( 'path.link' )
            .data( input__links, function( d ) { return d.id; }); // CORRECT - SEE COMMENTS ABOVE
    
    //	Enter any new links at the parent's previous position.
        var linkEnter = input__link.enter().insert( 'path', 'g' )
            .attr( 'class', 'link' )
            .attr( 'd', function( d ) { // ATTRIBUTE 'd'
              var o = { x: source.x0, y: source.y0 };
              return bizamajig__bind__tree__diagonal( o, o );
            });
    
    //	UPDATE
        var linkUpdate = linkEnter.merge( input__link );
    
    //	Transition back to the parent element position
        linkUpdate.transition()
            .duration(duration)
            .attr( 'd', function( d ) {
              return bizamajig__bind__tree__diagonal( d, d.parent )
            });
    
    //	Remove any exiting links
        var linkExit = input__link.exit().transition()
            .duration(duration)
            .attr( 'd', function( d ) {
              var o = { x: source.x, y: source.y };
              return bizamajig__bind__tree__diagonal( o, o );
            })
            .remove();
    //
    //	END TREE - UPDATE - LINKS
    //
    ////////////////////////////////////////////////////////////////////////////////////
    
    //	Store the old positions for transition.
        input__nodes.forEach( function( d ) {
          d.x0 = d.x;
          d.y0 = d.y;
        });
    
      // Toggle children on click.
        function bizamajig__bind__tree__toggle_children( d ) {
          if ( d.children ) {
              d._children = d.children;
              d.children = null;
            } else {
              d.children = d._children;
              d._children = null;
            }
    
                bizamajig__bind__tree__update( d );
    
            }
        } 
      }
    render(){
        return (
            <React.Fragment>
                <h1>About Animation</h1>
                <div className="skills">
                <svg></svg>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutD3;