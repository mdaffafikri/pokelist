import React, {useContext, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as Mui from "@material-ui/core";
import * as Muicon from "@material-ui/icons";
import {GlobalState} from "../providers/Global"

const useStyles = makeStyles({    
    root: {
        // width: 275,        
    },    
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    cardBtn: {
        marginLeft: 'auto',
        color: 'crimson'
    }
})

function Shop() {
    const classes = useStyles();
    const cart = useContext(GlobalState)

    let addToCart = (itemName) => {
        
        var itemList = {...cart.item}

        if(!itemList[itemName]){
            itemList[itemName] = Number(1)
        }else{
            itemList[itemName] ++
        }

        cart.setItem(itemList)
        cart.setTotal(cart.total+1)
        // console.log(cart.item); 

        setNotifOpen(true) //notif
    }

    let [notifOpen, setNotifOpen] = useState(false)

    const closeNotif = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotifOpen(false)
    }

    return (
        <div>

            <Mui.Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                <Mui.Grid item md={3} sm={6} xs={12}>
                    <Mui.Card className={classes.root}>
                        <Mui.CardContent>
                            <Mui.Typography className={classes.title} color="textSecondary" gutterBottom>
                            Tool
                            </Mui.Typography>
                            <Mui.Typography variant="h5" component="h2">
                            Poke Ball
                            </Mui.Typography>
                            <Mui.Typography className={classes.pos} color="textSecondary">
                            <img width="50px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="poke ball"/>
                            </Mui.Typography>
                            <Mui.Typography variant="body2" component="p">
                            A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system.
                            </Mui.Typography>
                        </Mui.CardContent>
                        <Mui.CardActions>
                            <Mui.Tooltip title="Add to Cart" arrow>
                                <Mui.Button onClick={() => addToCart('Poke Ball')} className={classes.cardBtn} size="small"><Muicon.AddShoppingCart></Muicon.AddShoppingCart></Mui.Button>                            
                            </Mui.Tooltip>                            
                        </Mui.CardActions>
                    </Mui.Card>                
                </Mui.Grid>
                
                <Mui.Grid item md={3} sm={6} xs={12}>
                    <Mui.Card className={classes.root}>
                        <Mui.CardContent>
                            <Mui.Typography className={classes.title} color="textSecondary" gutterBottom>
                            Consumable
                            </Mui.Typography>
                            <Mui.Typography variant="h5" component="h2">
                            Lemonade
                            </Mui.Typography>
                            <Mui.Typography className={classes.pos} color="textSecondary">
                            <img width="50px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lemonade.png" alt="poke ball"/>
                            </Mui.Typography>
                            <Mui.Typography variant="body2" component="p">
                            A very sweet and refreshing drink. When consumed, restores up to 70 HP to an injured Pokémon.
                            </Mui.Typography>
                        </Mui.CardContent>
                        <Mui.CardActions>
                            <Mui.Tooltip title="Add to Cart" arrow>
                                <Mui.Button onClick={ () => addToCart('Lemonade')} className={classes.cardBtn} size="small"><Muicon.AddShoppingCart></Muicon.AddShoppingCart></Mui.Button>                        
                            </Mui.Tooltip>                          
                        </Mui.CardActions>
                    </Mui.Card>                
                </Mui.Grid>

                <Mui.Grid item md={3} sm={6} xs={12}>
                    <Mui.Card className={classes.root}>
                        <Mui.CardContent>
                            <Mui.Typography className={classes.title} color="textSecondary" gutterBottom>
                            Consumable
                            </Mui.Typography>
                            <Mui.Typography variant="h5" component="h2">
                            Berry Juice
                            </Mui.Typography>
                            <Mui.Typography className={classes.pos} color="textSecondary">
                            <img width="50px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berry-juice.png" alt="poke ball"/>
                            </Mui.Typography>
                            <Mui.Typography variant="body2" component="p">
                            A 100% pure juice made of Berries. It restores the HP of one Pokémon by just 20 points.
                            </Mui.Typography>
                        </Mui.CardContent>
                        <Mui.CardActions>
                            <Mui.Tooltip title="Add to Cart" arrow>
                                <Mui.Button onClick={ () => addToCart('Berry Juice')} className={classes.cardBtn} size="small"><Muicon.AddShoppingCart></Muicon.AddShoppingCart></Mui.Button>
                            </Mui.Tooltip>
                        </Mui.CardActions>
                    </Mui.Card>                
                </Mui.Grid>

                <Mui.Grid item md={3} sm={6} xs={12}>
                    <Mui.Card className={classes.root}>
                        <Mui.CardContent>
                            <Mui.Typography className={classes.title} color="textSecondary" gutterBottom>
                            Tool
                            </Mui.Typography>
                            <Mui.Typography variant="h5" component="h2">
                            Master Ball
                            </Mui.Typography>
                            <Mui.Typography className={classes.pos} color="textSecondary">
                            <img width="50px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png" alt="master ball"/>
                            </Mui.Typography>
                            <Mui.Typography variant="body2" component="p">
                            The best Poké Ball with the ultimate level of performance. With it, you will catch any wild Pokémon without fail.
                            </Mui.Typography>
                        </Mui.CardContent>
                        <Mui.CardActions>
                            <Mui.Tooltip title="Add to Cart" arrow>
                                <Mui.Button onClick={ () => addToCart('Master Ball')} className={classes.cardBtn} size="small"><Muicon.AddShoppingCart></Muicon.AddShoppingCart></Mui.Button>
                            </Mui.Tooltip>                            
                        </Mui.CardActions>
                    </Mui.Card>                
                </Mui.Grid>

                <Mui.Grid item md={3} sm={6} xs={12}>
                    <Mui.Card className={classes.root}>
                        <Mui.CardContent>
                            <Mui.Typography className={classes.title} color="textSecondary" gutterBottom>
                            Consumable
                            </Mui.Typography>
                            <Mui.Typography variant="h5" component="h2">
                            Soda Pop
                            </Mui.Typography>
                            <Mui.Typography className={classes.pos} color="textSecondary">
                            <img width="50px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/soda-pop.png" alt="soda pop"/>
                            </Mui.Typography>
                            <Mui.Typography variant="body2" component="p">
                            A highly carbonated soda drink. When consumed, it restores up to 50 HP to an injured Pokémon.
                            </Mui.Typography>
                        </Mui.CardContent>
                        <Mui.CardActions>
                            <Mui.Tooltip title="Add to Cart" arrow>
                                <Mui.Button onClick={ () => addToCart('Soda Pop')} className={classes.cardBtn} size="small"><Muicon.AddShoppingCart></Muicon.AddShoppingCart></Mui.Button>
                            </Mui.Tooltip>                            
                        </Mui.CardActions>
                    </Mui.Card>                
                </Mui.Grid>

                <Mui.Grid item md={3} sm={6} xs={12}>
                    <Mui.Card className={classes.root}>
                        <Mui.CardContent>
                            <Mui.Typography className={classes.title} color="textSecondary" gutterBottom>
                            Consumable
                            </Mui.Typography>
                            <Mui.Typography variant="h5" component="h2">
                            Rare Candy
                            </Mui.Typography>
                            <Mui.Typography className={classes.pos} color="textSecondary">
                            <img width="50px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rare-candy.png" alt="rare candy"/>
                            </Mui.Typography>
                            <Mui.Typography variant="body2" component="p">
                            A candy that is packed with energy. It raises the level of a POKéMON by one.
                            </Mui.Typography>
                        </Mui.CardContent>
                        <Mui.CardActions>
                            <Mui.Tooltip title="Add to Cart" arrow>
                                <Mui.Button onClick={ () => addToCart('Rare Candy')} className={classes.cardBtn} size="small"><Muicon.AddShoppingCart></Muicon.AddShoppingCart></Mui.Button>
                            </Mui.Tooltip>                            
                        </Mui.CardActions>
                    </Mui.Card>                
                </Mui.Grid>

                <Mui.Grid item md={3} sm={6} xs={12}>
                    <Mui.Card className={classes.root}>
                        <Mui.CardContent>
                            <Mui.Typography className={classes.title} color="textSecondary" gutterBottom>
                            Consumable
                            </Mui.Typography>
                            <Mui.Typography variant="h5" component="h2">
                            Lava Cookie
                            </Mui.Typography>
                            <Mui.Typography className={classes.pos} color="textSecondary">
                            <img width="50px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lava-cookie.png" alt="lava cookie"/>
                            </Mui.Typography>
                            <Mui.Typography variant="body2" component="p">
                            Lavaridge Town’s local specialty. It can be used once to heal all the status conditions of a Pokémon.
                            </Mui.Typography>
                        </Mui.CardContent>
                        <Mui.CardActions>
                            <Mui.Tooltip title="Add to Cart" arrow>
                                <Mui.Button onClick={ () => addToCart('Lava Cookie')} className={classes.cardBtn} size="small"><Muicon.AddShoppingCart></Muicon.AddShoppingCart></Mui.Button>
                            </Mui.Tooltip>                            
                        </Mui.CardActions>
                    </Mui.Card>                
                </Mui.Grid>

                <Mui.Grid item md={3} sm={6} xs={12}>
                    <Mui.Card className={classes.root}>
                        <Mui.CardContent>
                            <Mui.Typography className={classes.title} color="textSecondary" gutterBottom>
                            Consumable
                            </Mui.Typography>
                            <Mui.Typography variant="h5" component="h2">
                            Honey
                            </Mui.Typography>
                            <Mui.Typography className={classes.pos} color="textSecondary">
                            <img width="50px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/honey.png" alt="honey"/>
                            </Mui.Typography>
                            <Mui.Typography variant="body2" component="p">
                            A sweet honey with a lush aroma that attracts wild Pokémon when it is used.
                            </Mui.Typography>
                        </Mui.CardContent>
                        <Mui.CardActions>
                            <Mui.Tooltip title="Add to Cart" arrow>
                                <Mui.Button onClick={ () => addToCart('Honey')} className={classes.cardBtn} size="small"><Muicon.AddShoppingCart></Muicon.AddShoppingCart></Mui.Button>
                            </Mui.Tooltip>                            
                        </Mui.CardActions>
                    </Mui.Card>                
                </Mui.Grid>

            </Mui.Grid>
            
            <Mui.Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={notifOpen}
                autoHideDuration={6000}
                onClose={closeNotif}
                message="Added to cart!"
                action={
                <React.Fragment>                    
                    <Mui.IconButton size="small" aria-label="close" color="secondary" onClick={closeNotif}>
                        <Muicon.Close fontSize="small" />
                    </Mui.IconButton>
                </React.Fragment>
                }
            />
        </div>
    )
}

export default Shop
